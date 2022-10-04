# MongoDB-with-NextJS
The one repo that will make MongoDB integration with NextJS Simple!!! This repo contains all the files with sample code to perform MongoDB integration to NextJS and insert, find and update data on the MongoDB Atlas database. Simple API calls to get you up and running!


** THE FILES ATTACHED TO THIS REPO ARE FOR EDUCATIONAL PURPOSES ONLY **

** NOT FINANCIAL ADVISE **

** USE IT AT YOUR OWN RISK** **I'M NOT RESPONSIBLE FOR ANY USE, ISSUES ETC.. **
  
Click for video:

<a href="https://youtu.be/adD83Y38NS8" target="_blank"><img src="https://github.com/net2devcrypto/misc/blob/main/ytlogo2.png" width="150" height="40"></a> 

Steps:

1-Create an new NextJS app:

```shell
npx create-next-app defiswap
```

2- Install Dependencies:

```shell
cd defiswap
npm i @nextui-org/react web3 web3modal ethers alchemy-sdk sf-font
npm i --save-dev @types/react
npm i --save-dev @types/qs
```

3- Replace all files and folders in your project with the ones attached to this repo.

Add all files and folders to the root project directory "defiswap", overwrite when prompted.

4- Create a new Alchemy API App for Ethereum Mainnet and update the API Key field with your

Alchemy API Key in the defiswap.js file

```shell
 const config = {
      apiKey: "PLACE YOUR API KEY",
      network: Network.ETH_MAINNET,
    };
```

Save File after updating!


5- Start your application, navigate to the project page and enjoy!

```shell
npm run dev
```
