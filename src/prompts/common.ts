import inquirer from 'inquirer';
import validatePackageName from 'validate-npm-package-name';

export class CommonPrompts {
    static async input(
        message: string,
        defaultValue?: string,
        validate?: (input: string) => boolean | string
    ): Promise<string> {
        const { value } = await inquirer.prompt([
            {
                type: 'input',
                name: 'value',
                message,
                default: defaultValue,
                validate
            }
        ]);

        return value;
    }

    static async confirm(message: string, defaultValue: boolean = true): Promise<boolean> {
        const { value } = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'value',
                message,
                default: defaultValue
            }
        ]);

        return value;
    }

    static async select<T>(
        message: string,
        choices: Array<{ name: string; value: T; disabled?: boolean }>
    ): Promise<T> {
        const { value } = await inquirer.prompt([
            {
                type: 'list',
                name: 'value',
                message,
                choices
            }
        ]);

        return value;
    }

    static async multiSelect<T>(
        message: string,
        choices: Array<{ name: string; value: T; checked?: boolean }>
    ): Promise<T[]> {
        const { values } = await inquirer.prompt([
            {
                type: 'checkbox',
                name: 'values',
                message,
                choices
            }
        ]);

        return values;
    }

    static validateProjectName(name: string): boolean | string {
        if (!name) {
            return 'Project name is required';
        }

        const validation = validatePackageName(name);

        if (!validation.validForNewPackages) {
            const errors = [
                ...(validation.errors || []),
                ...(validation.warnings || [])
            ];
            return errors[0] || 'Invalid project name';
        }

        return true;
    }
}