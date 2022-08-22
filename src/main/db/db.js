import { ipcMain } from 'electron';
import Database from 'better-sqlite3';

const db = new Database(`${process.cwd()}/takeWayApp.db`, {});



  ipcMain.handle('DB', () => {
    const row = db.prepare('SELECT * FROM dishes');
    console.dir(row);

    return row;
  });
  
