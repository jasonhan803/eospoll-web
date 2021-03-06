/* jshint esversion: 6 */ 
var ENV = 'testnet';
var network;
var options;

if(ENV === 'dev'){
    // local testnet
    network = {
        blockchain: 'eos',
        host: '127.0.0.1',
        port: 8888,
        protocol: 'http',
        chainId: "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f",
        verbose: true,
        debug: true,
    };
    options = {
        broadcast: true,
        sign: true,
        chainId: "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f",
        httpEndpoint: "http://127.0.0.1:8888"
    };
} else if(ENV === 'testnet'){
    // remote testnet
    network = {
        blockchain: 'eos',
        host: 'jungle.eosio.cr',
        port: 443,
        chainId: "038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca",
        protocol: "https"
    };
    options = {
        broadcast: true,
        sign: true,
        chainId: "038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca",
        httpEndpoint: "https://jungle.eosio.cr:443"
    };
} else if( ENV === 'mainnet') {
    // mainnet
    network = {
        blockchain: 'eos',
        host: 'api1.eosasia.one',
        port: 443,
        chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
        protocol: "https"
    };

    options = {
        broadcast: true,
        sign: true,
        chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
        httpEndpoint: "https://api1.eosasia.one:443"         
//      httpEndpoint: "http://mainnet.genereos.io:443"
    };
} else {
    throw("network config error");
}
