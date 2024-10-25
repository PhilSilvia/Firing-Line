# Firing Line

**Firing Line** is a Warhammer 40K weapon simulation tool designed for players who want to analyze weapon profiles, compare target interactions, and get an idea of how dice rolls affect combat results. With Firing Line, you can quickly test various weapons against different targets, get insights into damage output, and refine your battle strategies. For now this is only the backend API, but a front-end client will be added where you can add new profiles and targets and test them out via the web application. 

## Features

- **Simulated Dice Rolls**: Calculate the probability of different outcomes based on simulated dice rolls.
- **Customizable Weapon Profiles**: Input and test various weapon characteristics, such as Strength, AP, Damage, and more.
- **Target Profiles**: Add and modify target profiles with Toughness, Armor Saves, and special rules.
- **Detailed Results Analysis**: See expected average damage, hit and wound probabilities, and the effects of rerolls.
- **Battle Stats Comparison**: Compare multiple weapon and target profiles side-by-side for quick insights.

## Getting Started

### Prerequisites

To run Firing Line locally, you’ll need:

- **Node.js** (latest LTS recommended)
- **npm** (included with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/firing-line.git
   cd firing-line
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. **Create a New Weapon Profile**: Add a weapon with fields for Strength, AP, Damage, and any special rules (such as rerolls).
2. **Add a Target Profile**: Configure a target with attributes like Toughness, Wounds, and Armor Saves.
3. **Run Simulations**: Select a weapon and target profile, then run the simulation. View detailed results for hits, wounds, damage, and expected outcomes.
4. **Compare Profiles**: Use the comparison feature to see how different weapons perform against the same target.

## Project Structure

```
/src
- Target.js
- WeaponProfile.js
- utils.js
```

## Contributing

Contributions are welcome! If you'd like to contribute to Firing Line:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy the thrill of testing Warhammer 40K strategies with Firing Line, and may your dice rolls be ever in your favor!
