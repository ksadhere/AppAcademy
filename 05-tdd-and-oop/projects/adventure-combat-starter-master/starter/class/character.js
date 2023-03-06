class Character {
  constructor(name, description, currentRoom) {
    // Fill this in
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.items = [];
    this.strength = 10;
    this.health = 100;
  }

  applyDamage(amount = this.strength) {
    // Fill this in
    this.health -= amount;
    console.log(`${this.name}'s health is now ${this.health}`);
    if (this.health === 0) {
      this.die();
    }
  }

  die() {
    // Fill this in
    console.log("Your health dropped to 0 - You've died!");
    this.currentRoom.items = [...this.items];
    this.currentRoom = null;
  }
}

module.exports = {
  Character,
};
