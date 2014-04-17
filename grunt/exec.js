module.exports = {
    browserstack: {
        command: 'node_modules/browserstack-test/bin/browserstack-test -u $BROWSERSTACK_USERNAME -p $BROWSERSTACK_PASS -k $BROWSERSTACK_AUTHKEY -b test/browsers.json -t 60 http://localhost:9999/test-crossbrowser.html'
    },
    'browserstack-live':{
        cmd: 'java -jar test/libraries/BrowserStackTunnel.jar $BROWSERSTACK_AUTHKEY localhost,4000,0'
    },
    'move-dist': {
        cmd: 'mv dist _site/'
    },
    'copy-src': {
        cmd: 'cp -r src _site/'
    },
    'copy-static': {
        cmd: 'cp -r static _site/'
    },
    'copy-test': {
        cmd: 'cp -r test _site/'
    }
};
