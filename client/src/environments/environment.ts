// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    api: '/api',

    contents: 'assets/content.json',

    dates: {
        registration: 1510862400000+(1000*60*60),
        event: 1511625600000+(1000*60*60),
    }
};
