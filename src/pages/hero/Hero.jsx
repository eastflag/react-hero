import React, {useState} from 'react';
import {View} from "./View";
import {Edit} from "./Edit";

export const Hero = (props) => {
  console.log('View: ', props);
  const [is_edit, setIs_edit] = useState(false);

  const handleEditMode = (e) => {
    setIs_edit(!is_edit);
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center m-3">
        <h3>{ is_edit ? 'Hero Edit' : 'Hero Detail View' }</h3>
        <div>
          { is_edit ? <button className="btn btn-info" onClick={handleEditMode}>취소</button> :
            <button className="btn btn-success" onClick={handleEditMode}>수정</button>
          }
          <button className="btn btn-danger ml-3">삭제</button>
        </div>
      </div>
      {
        is_edit ? <Edit id={props.match.params['id']}/> : <View id={props.match.params['id']} />
      }
    </>
  );
}
