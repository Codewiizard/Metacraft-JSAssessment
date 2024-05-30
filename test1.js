/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,artist,description ) {
      const nft = {
         name:name ,
         artist:artist, 
         description:description
      };
      NFTs.push(nft)
      console.log("Minted: "+name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for (let i = 0;i<NFTs.length;i++){
      console.log("\nNFT:"+(i+1));
      console.log("Name:    \t\t"+ NFTs[i].name);
      console.log("Artist:  \t\t"+ NFTs[i].artist);
      console.log("Description:\t"+ NFTs[i].description);
      
   }
   
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("total NFT's:\t"+NFTs.length);
}

// call your functions below this line
mintNFT("Zevin","Parallel_Lore_Deployer","The human body is a machine, and a good doctor knows how to keep it running.");
mintNFT("Felicity","Parallel_Lore_Deployer","Strength and determination are the cornerstones of Marcolian power.");
mintNFT("Charm","PixelVaultDeployer","The Pixel Vault Cores are 146 uniquely hand drawn characters, designed by project creatives Chris Wahl and Odious");

listNFTs();
getTotalSupply()

