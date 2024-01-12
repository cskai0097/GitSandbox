const createPlayer = (playerClass) => {
    return (name) => {
        return {
            name: name,
            playerClass: playerClass,
            playerHP: 10,
            takeDMG: function() {
                this.playerHP -= 1;
            }
        }
    }
}
const player1 = createPlayer("Warrior")

/*const createPlayer = (playerClass) => {
    return (name) => {
      return {
        name: name,
        playerClass: playerClass,
        playerHP: 10,
        takeDMG: function() {
          this.playerHP -= 1; // Fix: Subtract 1 from playerHP
        }
      };
    };
  };
  
  // Example usage:
  const warriorPlayer = createPlayer("Warrior")("John");
  console.log(warriorPlayer);
  warriorPlayer.takeDMG();
  console.log(warriorPlayer.playerHP);*/
  