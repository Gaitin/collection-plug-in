
**移动端**
####safari默认时间格式是yyyy/mm/dd，需要替换成-

##### chrome：`new Date('2016-10-28');`
##### safari：`new Date('2016-10-28'.replace(/-/g,"/"));`