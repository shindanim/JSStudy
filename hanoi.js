const hanoi = function (disc, src, aux, dest) {
	if (disc > 0) {
        hanoi(disc - 1, src, dest, aux);
        console.log(`move disx ${disc} from ${src} to ${dest}`);
        hanoi (disc - 1 , aux, src, dest);
	}
};

hanoi(3, 'src', 'aux', 'dest');