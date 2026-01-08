import { execa } from 'execa';

export class PNPMInstaller {
  async install(packages: string[], cwd: string, dev: boolean = false): Promise<void> {
    const args = ['add'];
    
    if (dev) {
      args.push('--save-dev');
    }
    
    args.push(...packages);
    
    await execa('pnpm', args, { cwd, stdio: 'inherit' });
  }
  
  async installAll(cwd: string): Promise<void> {
    await execa('pnpm', ['install'], { cwd, stdio: 'inherit' });
  }
  
  async runScript(script: string, cwd: string): Promise<void> {
    await execa('pnpm', ['run', script], { cwd, stdio: 'inherit' });
  }
  
  async exec(command: string, args: string[], cwd: string): Promise<void> {
    await execa('pnpm', ['dlx', command, ...args], { cwd, stdio: 'inherit' });
  }
}