import 'dotenv/config'
import express from 'express'

if(!process.env.JWT_SECRET){
    throw new Error('JWT_SECRET não definido nas variáveis ambiente');
}
if(!process.env.DATABASE_URL){
    throw new Error('DATABASE_URL não definifo nas variáveis ambiente');
}