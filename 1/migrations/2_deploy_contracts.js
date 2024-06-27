const BasicMath = artifacts.require("BasicMath");

module.exports = function(deployer) {
    deployer.deploy(BasicMath);
};
