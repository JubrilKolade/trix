import { execa } from 'execa';

export class NPMInstaller {
  async install(packages: string[], cwd: string, dev: boolean = false): Promise<void> {
    const args = ['install'];
    
    if (dev) {
      args.push('--save-dev');
    }
    
    args.push(...packages);
    
    await execa('npm', args, { cwd, stdio: 'inherit' });
  }
  
  async installAll(cwd: string): Promise<void> {
    await execa('npm', ['install'], { cwd, stdio: 'inherit' });
  }
  
  async runScript(script: string, cwd: string): Promise<void> {
    await execa('npm', ['run', script], { cwd, stdio: 'inherit' });
  }
  
  async exec(command: string, args: string[], cwd: string): Promise<void> {
    await execa('npx', [command, ...args], { cwd, stdio: 'inherit' });
  }
}