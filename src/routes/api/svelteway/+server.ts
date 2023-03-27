import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { cwd } from 'process';
import { Buffer } from 'node:buffer';
import * as fs from 'fs';
 
export const POST = (({ url }) => {
  const path = url.searchParams.get('path')
  const swc = url.searchParams.get('swc')
  const buf = Buffer.from(`${swc}`, 'utf8');
  console.log("path", path)
  console.log("swc", swc)
  console.log("buf", buf)
  try {
    if(swc){
      fs.writeFileSync(path, buf);
    }
    console.error("Updated Successfully!");
  } catch (err) {
    console.error(err);
  }
  return new Response(String("Updated Successfully!"));
}) satisfies RequestHandler;


export const GET = (({ url }) => {
  const path = url.searchParams.get('path')
  console.log("path", path)
  const data = fs.readFileSync(path);
console.log("Synchronous read: " + data.toString());
  return new Response(String(data));
}) satisfies RequestHandler;