pragma solidity =0.6.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BonusToken is ERC20 {
  address public admin;
  address public liquiditor;
  constructor() ERC20('Bones Token', 'BTK') public {
    admin = msg.sender;
  }

  function setLiquidator(address _liquiditor) external {
    require(msg.sender == admin, 'Only admin');
    liquiditor = _liquiditor;
  }

  function mint(address to, uint amount) external {
    require(msg.sender == liquiditor, 'Only liquiditor');
    _mint(to, amount);
  }
}