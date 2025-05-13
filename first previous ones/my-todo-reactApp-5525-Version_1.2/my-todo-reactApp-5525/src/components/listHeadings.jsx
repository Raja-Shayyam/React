export function HeadingList()
{
  let tasks = 'Task';

  return <div id="heading-list">
      <div>
        <input type="text" placeholder={tasks}/>
      </div>
      <div>
        <input type="date"/>
      </div>
      <div><button>Add</button></div>
  </div>;

}