

const List = ({ value }) => {
  console.log('jii');
  
  const { isPending, dataList } = value
  return (
    <div>
      {
        isPending ? 'loading ...'

          :
          dataList.map((ee, idx) => (
            <li key={idx}>{` > ${ee}`}</li>
          ))
      }
    </div>
  )
}

export default List;
