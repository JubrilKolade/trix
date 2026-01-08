import { execa } from 'execa';

export class YarnInstaller {
  async install(packages: string[], cwd: string, dev: boolean = false): Promise<void> {
    const args = ['add'];
    
    if (dev) {
      args.push('--dev');
    }
    
    args.push(...packages);
    
    await execa('yarn', args, { cwd, stdio: 'inherit' });
  }
  
  async installAll(cwd: string): Promise<void> {
    await execa('yarn', ['install'], { cwd, stdio: 'inherit' });
  }
  
  async runScript(script: string, cwd: string): Promise<void> {
    await execa('yarn', [script], { cwd, stdio: 'inherit' });
  }
  
  async exec(command: string, args: string[], cwd: string): Promise<void> {
    await execa('yarn', [command, ...args], { cwd, stdio: 'inherit' });
  }
}