import { execa } from 'execa';

export class BunInstaller {
  async install(packages: string[], cwd: string, dev: boolean = false): Promise<void> {
    const args = ['add'];
    
    if (dev) {
      args.push('--dev');
    }
    
    args.push(...packages);
    
    await execa('bun', args, { cwd, stdio: 'inherit' });
  }
  
  async installAll(cwd: string): Promise<void> {
    await execa('bun', ['install'], { cwd, stdio: 'inherit' });
  }
  
  async runScript(script: string, cwd: string): Promise<void> {
    await execa('bun', ['run', script], { cwd, stdio: 'inherit' });
  }
  
  async exec(command: string, args: string[], cwd: string): Promise<void> {
    await execa('bunx', [command, ...args], { cwd, stdio: 'inherit' });
  }
}