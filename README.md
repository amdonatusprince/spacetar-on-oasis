# Spacetar 

Spacetar is a SocialFi forum dApp on Sapphire, that allows users to earn reward tokens by actively participating and engaging in the community. User's earned rewards can be swapped for any erc20 tokens on Sapphire and also rewards can be staked and locked to earn more interest and incentives.

We built Spacetar using `Solidity` for the contract creation, `Hardhat` for the contract deployment, `Oasis Sapphire Hardhat` in our config file to initialize encryption of our contract, `Javascript` and `Typescript` for building out the frontend architecture, then `Wagmi` and `Rainbowkit` was used for the frontend integration

![Spacetar Homepage](https://github.com/amdonatusprince/spacetar-on-oasis/blob/main/frontend/src/assets/homepage.png)


## How to Use
### Using Spacetar Locally
To explore and interact with the Spacetar decentralized application (dApp) on your local machine, follow these steps:

1. Clone the Repository
* Open your terminal or command prompt.
* Navigate to the directory where you want to clone the repository.
* Run the following command to clone the repository:

2. Install Dependencies
* Navigate to the cloned repository's directory:
```
cd spacetar-on-oasis/frontend
```
* Install the required Node.js packages by running:
```
npm install
```
3. Set Up Environment Variables
* Create a file named .env in the root directory of the project.
* Open the .env file and add the following variables:
```
VITE_CONTRACT=YOUR_CONTRACT_ADDRESS
```
Replace YOUR_CONTRACT_ADDRESS with the deployed contract address.

4. Run the Application
After setting up the environment variables, run the following command to start the application:
``` npm start ```
Your default web browser should automatically open and display the Spacetar dApp. If it doesn't, you can manually open your browser and navigate to ```http://localhost:5173```.
5. Explore and Engage
Now you can explore the various features of the Spacetar dApp locally, including joining Help Rooms, earning reward tokens, contributing to the community, and experiencing a transformative journey towards improved mental well-being.

## Using Spacetar on the Live Website
To access and use the Spacetar decentralized application on the live website, simply visit
https://spacetar-on-oasis.vercel.app/.
Here, you can seamlessly engage with all the empowering features that Spacetar has to offer. Join Help Rooms, earn reward tokens, contribute to the community, and embark on a meaningful journey towards enhanced mental well-being.

## What's next for Spacetar
Spacetar represents more than a socialFI decentralized application; it's a movement. In the future, we envision further enhancing the platform:

* **Expanded Features:** Our smart contract still has a lot of features that we'll continuously refine and expand on based on user feedback and evolving needs, ensuring it remains a cutting-edge and responsive platform. Also, we would be building out an admin section of the dApp so as to moderate things as the community grows and an option for users to customize their avatars.
  
* **Token Gated Access:** This feature will allow users to be able to create private rooms where they can share resources or have private conversations with specific people. The access will be granted by the admin based on his specified criteria.

* **Decentralized Exchange**: We would be working to integrate DEX into Spacetar so that users can be able to swap their reward tokens, stake their tokens, or gift reward tokens to other community members.

* **Research and Innovation:** Currently the '@oasisprotocol/sapphire-paratime'; only supports ethers so we would need to integrate support for views as we scale Spacetar.
  
* **AI Chatbot:** We are also working on leveraging OpenAI GPT-4 to integrate an AI chatbot assistance that will help the users navigate through the dApp as we expand our features.

* **Anonymous Transfers:** We are also working on integrating stealth addresses so users can receive crypto without revealing their wallet address which is their identity on the blockchain.

This feature is heavily inspired by [Vitalik's article on stealth addresses](https://vitalik.eth.limo/general/2023/01/20/stealth.html)



## Useful Resources
- Link to Deployed Website: https://spacetar-on-oasis.vercel.app/
- Contract Address (0x1f6A37FECCB212859Cd4184BdD059b304885f8b5)
- Link to txns on Sapphire Explorer: https://explorer.oasis.io/testnet/sapphire/address/0x1f6A37FECCB212859Cd4184BdD059b304885f8b5
- Link to Spacetar DEMO Video: https://youtu.be/MpsgqMmtJJ4
