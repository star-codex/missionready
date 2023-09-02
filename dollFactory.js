// create smaller specific factories for the doll parts

class HeadFactory {
	constructor(props) {
		this.hairColour = props.hairColour;
	}
}

class TorsoFactory {
	constructor(props) {
		this.clothing = props.clothing;
	}
}

class ArmsFactory {
	constructor(props) {
		this.accessory = props.accessory;
	}
}

class LegsFactory {
	constructor(props) {
		this.shoes = props.shoes;
	}
}

// create big doll factory containing the smaller ones

class DollPartsFactory {
	constructor(type, props) {
		if (type === 'head') return new HeadFactory(props);
		if (type === 'torso') return new TorsoFactory(props);
		if (type === 'arms') return new ArmsFactory(props);
		if (type === 'legs') return new LegsFactory(props);
	}
}

// create doll and assign qualities to it
let doll = {};
let dollProps = {
	hairColour: 'brown',
	clothing: 'dress',
	accessory: 'bracelet',
	shoes: 'boots',
};

// fetches everything required to build the complete doll object
doll.head = new DollPartsFactory('head', dollProps);
doll.torso = new DollPartsFactory('torso', dollProps);
doll.arms = new DollPartsFactory('arms', dollProps);
doll.legs = new DollPartsFactory('legs', dollProps);

console.log(doll);
// {
//   head: HeadFactory { hairColour: 'brown' },
//   torso: TorsoFactory { clothing: 'dress' },
//   arms: ArmsFactory { accessory: 'bracelet' },
//   legs: LegsFactory { shoes: 'boots' }
// }