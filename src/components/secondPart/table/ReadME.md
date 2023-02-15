 const tableContent=contentData.map(content=>{
  return (
    <Content  
      /* contentName={content.contentName}
      head={content.head}
      classNumber={content.classNumber}
      number={content.number}
      subhead={content.subhead} */
      {...content}/>
  )
  });

const tableContent2=contentData2.map(content=>{
  return (
    <Content  
      /* contentName={content.contentName}
      head={content.head}
      number={content.number}
      subhead={content.subhead} */
      {...content}/>
  )
  });