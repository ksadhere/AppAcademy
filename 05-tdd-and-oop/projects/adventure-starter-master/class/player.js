class Player {
  constructor(name, startingRoom) {
    this.name = name;
    this.currentRoom = startingRoom;
    this.items = [];
  }

  move(direction) {
    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log('You cannot move in that direction');
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0; i < this.items.length; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    // Fill this in
    let item = this.currentRoom.getItemByName(itemName);
    this.items.push(item); // adding to player

    //removing from room
    let roomItems = this.currentRoom.items;
    this.currentRoom.items = roomItems.filter(
      (roomItem) => roomItem.name !== itemName
    );
  }

  // dropItem(itemName) {
  //   const item = this.items.filter((next) => next.name === itemName)[0];
  //   this.items = this.items.filter((next) => next.name !== itemName);

  //   if (item) {
  //     this.currentRoom.catchDroppedItem(item);
  //   }
  // }

  eatItem(itemName) {
    const item = this.getItemByName(itemName);
    if (item.isFood) {
      this.items = this.items.filter((next) => next.name !== itemName);
    }
  }

  getItemByName(name) {
    return this.items.filter((item) => name === item.name)[0];
  }

  dropItem(itemName) {
    // Fill this in
    let item = this.getItemByName(itemName);
    // removing from player
    let playerItems = this.items;
    this.items = playerItems.filter(
      (playerItem) => playerItem.name !== itemName
    );
    // adding to room
    this.currentRoom.items.push(item);
  }

  // eatItem(itemName) {
  //   // Fill this in
  //   this.items.forEach((item, index) => {
  //     if (item.name === itemName && item instanceof Food)
  //       this.items.splice(index, 1);
  //   });
  // }

  // getItemByName(name) {
  //   // Fill this in
  //   for (const item of this.items) {
  //     if (item.name === name) {
  //       return item;
  //     }
  //   }
  // }
}

module.exports = {
  Player,
};
