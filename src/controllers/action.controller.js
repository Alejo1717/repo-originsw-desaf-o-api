const actionController = {};
const db = require("../database");
const User = db.users;
const Action = db.actions;

actionController.createAction = async (req, res) => {
    if ((req.body.symbol == undefined)) {
        res.status(400).send({
            message: 'Please provide all required fields.'
        });
        return;
    }
    const newAction = {
        symbol: req.body.symbol,
        name: req.body.name,
        currency: req.body.currency,
        exchange: req.body.exchange,
        mic_code: req.body.mic_code,
        country: req.body.country,
        type: req.body.type
    }

    try {
        const action = await Action.create(newAction);
        res.status(200).json(action);
    }
    catch (ex) {
        if (ex.errors[0].type === 'unique violation') {
            res.status(409).json(ex.errors[0].message);
            return;
        }
        res.status(500).json(ex.errors[0].message);
    }
};
actionController.getUserAction = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id, {
            include: [
                {
                  model: Action,
                  as: "actions",
                  through: {
                    attributes: [],
                  },
                }]
        });
        res.status(200).json(user);
    
    }
    catch (ex) {
        res.status(500).json(ex);
    }

};

actionController.createUserAction = async (req, res) => {
    if ((req.body.symbol == undefined)) {
        res.status(400).send({
            message: 'Please provide all required fields.'
        });
        return;
    }
    const newAction = {
        symbol: req.body.symbol,
        name: req.body.name,
        currency: req.body.currency,
        exchange: req.body.exchange,
        mic_code: req.body.mic_code,
        country: req.body.country,
        type: req.body.type,
    }
   console.log('newAction', newAction)
    try {
        const action = await Action.findOne({
            where: {
                symbol: req.body.symbol,
                name: req.body.name,
                currency: req.body.currency,
                exchange: req.body.exchange,
                mic_code: req.body.mic_code,
                country: req.body.country,
                type: req.body.type
            }
        });
        console.log('user, action', action)
        const user = await User.findOne({ where: { id: Number(req.body.userId) } });
        
        if (user) {
            if (!action) {
                console.log(action);
                const newAct = await Action.create(newAction);
                
                newAct.addUser(user)
                return res.status(200).json(newAct);
            } else {
                action.addUser(user)
                return res.status(200).json(action.dataValues);
            }

        } else {
            
            return res.status(400).json('error');
        }

    } catch (error) {
        
        return res.status(500).json('No es por acá'); 
    }


}
actionController.deleteUserAction = async (req, res) => {
    if ((req.body.symbol == undefined)) {
        res.status(400).send({
            message: 'Please provide all required fields.'
        });
        return;
    }
    const newAction = {
        symbol: req.body.symbol,
        name: req.body.name,
        currency: req.body.currency,
        exchange: req.body.exchange,
        mic_code: req.body.mic_code,
        country: req.body.country,
        type: req.body.type
    }
   
    try {
        const action = await Action.findOne({
            where: {
                symbol: req.body.symbol,
                name: req.body.name,
                currency: req.body.currency,
                exchange: req.body.exchange,
                mic_code: req.body.mic_code,
                country: req.body.country,
                type: req.body.type
            }
        })
        const user = await User.findOne({ where: { id: Number(req.body.userId) } });
        console.log(user, action)
        if (user) {
            if (!action) {
                const newAct = await Action.create(newAction);
                console.log(newAct);
                newAct.removeUser(user)
                return res.status(200).json(newAct);
            } else {
                action.removeUser(user)
                return res.status(200).json(action.dataValues);
            }

        } else {
            
            return res.status(400).json('error');
        }

    } catch (error) {
        
        return res.status(500).json('No es por acá'); 
    }


}

module.exports = actionController;