export default class DB {
  private dbName:string
  private db:any
  constructor(dbName:string) {
    this.dbName = dbName
  }

  openStore(storeName:string, keyPath:string, indexs?:Array<string>) {
    const request = window.indexedDB.open(this.dbName, 2)
    return new Promise((resolve, reject) => {
      request.onsuccess = (event:any) => {
        this.db = event.target.result
        resolve('打开表成功')
      }
      request.onerror = (event) => {
        reject(new Error('打开表失败'))
      }
      request.onupgradeneeded = (event) => {
        const { result } :any = event.target

        // 相当于表
        const store = result.createObjectStore(storeName, { autoIncrement: true, keyPath })
        // 创建索引
        indexs?.forEach(v => store.createIndex(v, v, { unique: false }))

        store.transaction.oncomplete = (event:any) => {
        }
      }
    })
  }

  // 新增/修改表数据 修改操作时，传入id即可，如
  updateItem(storeName:string, data:any) {
    const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
    const request = store.put(data)
    return new Promise((resolve, reject) => {
      request.onsuccess = (event:any) => {
        resolve(event)
      }
      request.onerror = (event:any) => {
        reject(event)
      }
    })
  }

  // 删除数据
  deleteItem(storeName:string, key: number|string) {
    const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
    const request = store.delete(key)
    request.onsuccess = (event:any) => {
    }
    request.onerror = (event:any) => {
    }
  }

  // 查询所有数据
  getList(storeName:string) {
    return new Promise((resolve, reject) => {
      const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
      const request = store.getAll()
      let result = {}
      request.onsuccess = (event:any) => {
        result = { code: 200, message: '操作成功', result: event.target.result }
        resolve(result)
      }
      request.onerror = (event:any) => {
        reject(new Error('查询失败!'))
      }
    })
  }

  // 查询某条数据
  getItemByKey(storeName:string, key:string|number) {
    return new Promise((resolve, reject) => {
      const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
      const request = store.get(key)
      request.onsuccess = (event:any) => {
        resolve(event.target.result)
      }
      request.onerror = (event:any) => {
        reject(new Error('查询失败!'))
      }
    })
  }
}
