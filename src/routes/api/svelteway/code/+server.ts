import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { cwd } from 'process';
import { Buffer } from 'node:buffer';
import * as fs from 'fs';
import * as replaceInFile from 'replace-in-file'

 
export const POST = (async({ url }) => {
  const path = url.searchParams.get('path')
  const swc = url.searchParams.get('swc')
  const swcto = url.searchParams.get('swcto')
  const options = {
    files: path,
    from: swc,
    to: swcto,
  };
  try {
    const results = await replaceInFile.replaceInFile(options)
    console.log('Replacement results:', results);
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
  return new Response(String("Updated Successfully!"));
}) satisfies RequestHandler;