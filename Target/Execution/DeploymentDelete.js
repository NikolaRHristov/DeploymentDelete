#!/usr/bin/env node
import{Command as o}from"commander";import l from"../Fn/Delete.js";try{new o().name("DeploymentDelete").version("0.1.14").description("Deletes old deployments in your Cloudflare account.").option("-e, --Email <Email>","Cloudflare Account E-mail.").option("-i, --ID <ID>","Cloudflare Account ID.").option("-k, --Key <Key>","Cloudflare API key.").action(async e=>console.log(await l(e?.Email,e?.ID,e?.Key))).parse()}catch{}
