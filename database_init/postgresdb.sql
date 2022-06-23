-
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'md54d704ac82156a468284f402f1dd79f51';






--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2 (Debian 13.2-1.pgdg100+1)
-- Dumped by pg_dump version 13.2 (Debian 13.2-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

--
-- Database "originswdb" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2 (Debian 13.2-1.pgdg100+1)
-- Dumped by pg_dump version 13.2 (Debian 13.2-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: originswdb; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE originswdb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE originswdb OWNER TO postgres;

\connect originswdb

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: actions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.actions (
    id integer NOT NULL,
    symbol character varying(255),
    name character varying(255),
    currency character varying(255),
    exchange character varying(255),
    mic_code character varying(255),
    country character varying(255),
    type character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.actions OWNER TO postgres;

--
-- Name: actions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.actions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.actions_id_seq OWNER TO postgres;

--
-- Name: actions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.actions_id_seq OWNED BY public.actions.id;


--
-- Name: user_action; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_action (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    action_id integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE public.user_action OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255),
    password character varying(255),
    email character varying(255),
    firstname character varying(255),
    lastname character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: actions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actions ALTER COLUMN id SET DEFAULT nextval('public.actions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: actions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.actions (id, symbol, name, currency, exchange, mic_code, country, type, "createdAt", "updatedAt") FROM stdin;
1	AAC	Ares Acquisition Corporation	USD	NYSE	XNYS	United States	Common Stock	2022-06-23 00:00:01.864+00	2022-06-23 00:00:01.864+00
4	AAC.UN	Ares Acquisition Corporation	USD	NYSE	XNYS	United States	Common Stock	2022-06-23 00:02:16.529+00	2022-06-23 00:02:16.529+00
5	AAIC.PR.B	Arlington Asset Investment Corp.	USD	NYSE	XNYS	United States	Preferred Stock	2022-06-23 00:02:51.739+00	2022-06-23 00:02:51.739+00
6	AAIN	Arlington Asset Investment Corp	USD	NYSE	XNYS	United States	Preferred Stock	2022-06-23 00:08:09.776+00	2022-06-23 00:08:09.776+00
7	AGI	Alamos Gold Inc	USD	NYSE	XNYS	United States	Common Stock	2022-06-23 00:35:54.586+00	2022-06-23 00:35:54.586+00
8	DDL	Dingdong 	USD	NYSE	XNYS	United States	Common Stock	2022-06-23 01:20:44.589+00	2022-06-23 01:20:44.589+00
9	AIT	Applied Industrial Technologies Inc	USD	NYSE	XNYS	United States	Common Stock	2022-06-23 01:20:55.354+00	2022-06-23 01:20:55.354+00
10	ZTS	Zoetis Inc	USD	NYSE	XNYS	United States	Common Stock	2022-06-23 01:21:52.061+00	2022-06-23 01:21:52.061+00
11	AAIC.PR.C	Arlington Asset Investment Corp.	USD	NYSE	XNYS	United States	Preferred Stock	2022-06-23 01:31:30.356+00	2022-06-23 01:31:30.356+00
12	GAB-G	Gabelli Equity Trust Inc	USD	NYSE	XNYS	United States	Preferred Stock	2022-06-23 01:38:45.38+00	2022-06-23 01:38:45.38+00
13	UUU	Universal Security Instruments Inc	USD	NYSE	XASE	United States	Common Stock	2022-06-23 01:38:52.578+00	2022-06-23 01:38:52.578+00
14	SA	Seabridge Gold Inc	USD	NYSE	XNYS	United States	Common Stock	2022-06-23 01:39:08.758+00	2022-06-23 01:39:08.758+00
\.


--
-- Data for Name: user_action; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_action ("createdAt", "updatedAt", action_id, user_id) FROM stdin;
2022-06-23 00:35:54.605+00	2022-06-23 00:35:54.605+00	1	7
2022-06-23 01:20:44.605+00	2022-06-23 01:20:44.605+00	1	8
2022-06-23 01:20:55.361+00	2022-06-23 01:20:55.361+00	1	9
2022-06-23 01:21:52.07+00	2022-06-23 01:21:52.07+00	1	10
2022-06-23 01:31:30.367+00	2022-06-23 01:31:30.367+00	2	11
2022-06-23 01:38:45.39+00	2022-06-23 01:38:45.39+00	2	12
2022-06-23 01:38:52.592+00	2022-06-23 01:38:52.592+00	2	13
2022-06-23 01:39:08.77+00	2022-06-23 01:39:08.77+00	2	14
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, password, email, firstname, lastname, "createdAt", "updatedAt") FROM stdin;
1	Alejo1717	$2a$10$pQEWdd8ShhTbBaJ958DyMuSM8EEe4YLA/QeDbXuxIMJDgx/UoXKG6	alejandro.g@hotmail.com	Alejandro	Garcia	2022-06-22 23:56:41.041+00	2022-06-22 23:56:41.041+00
2	Agus	$2a$10$IiiRoDNMLtzrleEbxkKyaeE8Q4GJdIIihs/7tE67s3d97NkAG9ldK	agustinab@hotmail.com	Agustina	Burgos	2022-06-22 23:56:53.756+00	2022-06-22 23:56:53.756+00
\.


--
-- Name: actions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.actions_id_seq', 14, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: actions actions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actions
    ADD CONSTRAINT actions_pkey PRIMARY KEY (id);


--
-- Name: actions actions_symbol_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.actions
    ADD CONSTRAINT actions_symbol_key UNIQUE (symbol);


--
-- Name: user_action user_action_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_action
    ADD CONSTRAINT user_action_pkey PRIMARY KEY (action_id, user_id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: user_action user_action_action_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_action
    ADD CONSTRAINT user_action_action_id_fkey FOREIGN KEY (action_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_action user_action_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_action
    ADD CONSTRAINT user_action_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.actions(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2 (Debian 13.2-1.pgdg100+1)
-- Dumped by pg_dump version 13.2 (Debian 13.2-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--
