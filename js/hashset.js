 function HashSet(param1, param2) {
	var hashTable = new Hashtable(param1, param2);

	this.add = function(o) {
			hashTable.put(o, true);
	};

	this.addAll = function(arr) {
			for (var i = 0, len = arr.length; i < len; ++i) {
					hashTable.put(arr[i], true);
			}
	};

	this.values = function() {
			return hashTable.keys();
	};

	this.remove = function(o) {
			return hashTable.remove(o) ? o : null;
	};

	this.contains = function(o) {
			return hashTable.containsKey(o);
	};

	this.clear = function() {
			hashTable.clear();
	};

	this.size = function() {
			return hashTable.size();
	};

	this.isEmpty = function() {
			return hashTable.isEmpty();
	};

	this.clone = function() {
			var h = new HashSet(param1, param2);
			h.addAll(hashTable.keys());
			return h;
	};

	this.intersection = function(hashSet) {
			var intersection = new HashSet(param1, param2);
			var values = hashSet.values(), i = values.length, val;
			while (i--) {
					val = values[i];
					if (hashTable.containsKey(val)) {
							intersection.add(val);
					}
			}
			return intersection;
	};

	this.union = function(hashSet) {
			var union = this.clone();
			var values = hashSet.values(), i = values.length, val;
			while (i--) {
					val = values[i];
					if (!hashTable.containsKey(val)) {
							union.add(val);
					}
			}
			return union;
	};

	this.isSubsetOf = function(hashSet) {
			var values = hashTable.keys(), i = values.length;
			while (i--) {
					if (!hashSet.contains(values[i])) {
							return false;
					}
			}
			return true;
	};

	this.complement = function(hashSet) {
			var complement = new HashSet(param1, param2);
			var values = this.values(), i = values.length, val;
			while (i--) {
					val = values[i];
					if (!hashSet.contains(val)) {
							complement.add(val);
					}
			}
			return complement;
	};
}
