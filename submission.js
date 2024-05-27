/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1.
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name)).
4. For good measure, getTotalSupply() should return the number of NFTs you have created.
*/

// create a variable to hold your NFTs
let Var_for_NFT = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, eyeColor, shirtType, bling) {
    const newNFT = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    Var_for_NFT.push(newNFT);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    Var_for_NFT.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`Name: ${nft.name}`);
        console.log(`Eye Color: ${nft.eyeColor}`);
        console.log(`Shirt Type: ${nft.shirtType}`);
        console.log(`Bling: ${nft.bling}`);
        console.log('---------------------');
    });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return Var_for_NFT.length;
}

// call your functions below this line
mintNFT('Agrim', 'Brown', 'T-Shirt', 'Silver Chain');
mintNFT('Rajesh Khanna', 'Blue', 'Shirt', 'Diamond Ring');
mintNFT('Savita Kumari', 'Black', 'Saree', 'Golden Necklace');
mintNFT('Modi ji', 'Light Brown', 'Kurta', 'Diamond Watch');
mintNFT('Rahul Gandhi', 'Light Brown', 'Sweatshirt', 'Golden Chain');
mintNFT('Kejriwal', 'Black', 'Muffler', 'Bangles');

listNFTs();
console.log(`Total Supply: ${getTotalSupply()}`);
