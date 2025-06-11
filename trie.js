class TrieNode {
  constructor() {
    this.children = {};  // Each character will be a key
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!(char in node.children)) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this._findNode(word);
    return node !== null && node.isEndOfWord === true;
  }

  startsWith(prefix) {
    return this._findNode(prefix) !== null;
  }

  _findNode(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!(char in node.children)) {
        return null;
      }
      node = node.children[char];
    }
    return node;
  }
}
const trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple"));     // true
console.log(trie.search("app"));       // false
console.log(trie.startsWith("app"));   // true

trie.insert("app");
console.log(trie.search("app"));       // true
