import { DefaultConfigOptions } from '@formkit/vue';

const config: DefaultConfigOptions = {
    theme: 'genesis',
    inputs: {
        hello: {
            type: 'input',
            schema: ['Hello world']
        }
    }
};

export default config;