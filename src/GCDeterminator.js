class GraphColoringDeterminator {
    constructor() {
        this._nodeMap = {}
        this._nC = 0
        this._c = -1
        this._ch = [] 
    }
    // Initializers

    addNode(n) {
        this._nodeMap.push(n, [])
        this._nC++
    }

    addEdge(s, d) {
        if(!s in this._nodeMap) {
            addNode(s)
        }
        if(!d in this._nodeMap) {
            addNode(d)
        }
        this._nodeMap[s].push(d)
        this._nodeMap[d].push(s)
    }

    _initChecks() {
        for (var i=0;i< Object.keys(this._nodeMap).length;i++) {
            this._ch.push(true)
        }
    }

    // Matrix setting
    _setFalse() {
        this._ch.forEach(element => {
            if(element) {element = false;break;}
        });
    }

    // Matrix checking
    _colorTrue() {
        var fC = 0
        for (var b in this._ch) {
            fC = b? fC : fC++
            if (fC > this._c) return false
        }
        return true
    }

    _ratioTrue() {
        var fC, tC = 0
        for(var b in this._ch) {
            var t = b?tC++:fC++
        }
        return fC <= tC
    }
    // Changing >= to > will make one graph give a false negative, swapping it back is a false positive, fix it
    _config1(len) {
        return (len == this._nC - 1 || this._nC > this._c) && len >= this._c && this._nC == this._c+1
    }
    // May or may not be necessary
    _config2(len) {return (len == this._nC - 1 || this._nC > this._c) && len > this._c && this._nC != this._c+1}
    // Functions using lists
    _rowCounts(l) {if(l.isEmpty()) this._nC--}

    _checkEdges(l) {
        let len = l.length
        if(len <= 0) return
        if(this._config1(len) || this._config2(len)) this._setFalse()
    }
    // Driver
    graphColorDeterminator(co = 3) {
        this._initChecks()
        this._c = co
        for(var n in this._nodeMap) this._rowCounts(this._nodeMap[n])
        for(var node in this._nodeMap) this._checkEdges(this._nodeMap[node])
        return this._colorTrue() && this._ratioTrue();
    }

}