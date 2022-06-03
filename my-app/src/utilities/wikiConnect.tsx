export class Node {
  value: string;
  children: Node[];

  constructor(value: string) {
    this.value = value;
    this.children = [];
  }

  addChild(value: string) {
    this.children.push(new Node(value));
    return this;
  }
}

const axios = require('axios').default;

export const getLinks = (title: string, limit=500): Promise<any> => {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=links&pllimit=${limit}&plnamespace=0&origin=*&format=json`
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((r: { [key: string]: any }) => {
        const pageId = Object.keys(r.data.query.pages)[0];
        const linkDicts = r.data.query.pages[pageId].links;
        const linkArray = linkDicts.map((d: any) => d.title);
        const shuffledLinkArray = linkArray.sort(() => Math.random() - 0.5)
        resolve(shuffledLinkArray)
      })
      .catch((err: Error) => reject(err))
  })
}

export function bfs(root: Node, finish: Node) { 

  console.log('in bfs()')
  const queue = [root];
  const visited = new Set();

  while (queue.length > 0) {

    const current = queue.shift();
    
    if (current) {
      console.log(current.value)
      getLinks(current.value).then((links: string[]) => {
        
        // check for end
        if (links.includes(finish.value)) {
          console.log(`Found the end from page ${current.value}`)
          return current;
        } 

        // go through each link
        for (const link of links) {
          console.log(link)
          // if not visited, add to queue
          if (!visited.has(link)) {
            visited.add(link);
            queue.push(new Node(link));
          }
        }
      });
    }
  }
  return false;
};