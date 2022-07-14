import moment from "moment";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCelebrity } from "../../actions/celebrityActions";
const Celebrity = (props) => {
  let { _id, name, image, gender, dob, address } = props.celebrity;
  dob = moment(dob).format("YYYY-MMM-DD");

  const dispatch = useDispatch();

  // delete Celebrity Handler here;
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      dispatch(deleteCelebrity(id));
    }
  };

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>
          <img src={image} alt={name} style={{ width: "60px" }} />
        </td>
        <td>{gender}</td>
        <td>{dob}</td>
        <td>{address}</td>
        <td>
          <Link to="" className="btn btn-primary btn-sm">
            <i className="fa fa-edit"></i>
          </Link>
          <Link
            to="#"
            className="btn btn-danger btn-sm ml-2"
            onClick={() => deleteHandler(_id)}
          >
            <i className="fa fa-trash-alt"></i>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default Celebrity;