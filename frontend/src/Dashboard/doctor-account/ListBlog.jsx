/* eslint-disable react/prop-types */
import { formatDate } from "../../utils/formatDate"

const ListBlog = ({ doctorData }) => {
  console.log("list blog: ", doctorData)
  return (
    <table className="w-full text-left text-sm text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Title
          </th>
          <th scope="col" className="px-6 py-3">
            Content
          </th>
          <th scope="col" className="px-6 py-3">
            Updated
          </th>
          <th scope="col" className="px-6 py-3">
            Published
          </th>
        </tr>
      </thead>

      <tbody>
        {doctorData?.blogs?.map(item => (
          <>
            <tr key={item._id}>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespapce-nowrap"
              >
                <div className="pl-3">
                  {/* <div className="text-base font-semibold">
                    {item.title}
                  </div> */}
                  <div className="text-normal text-gray-500">
                    {item.title}
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">
                {item.content}
              </td>
              <td className="px-6 py-4">
                {formatDate(item.updatedAt)}
              </td>
              <td className="px-6 py-4">
                {item.isPublished}
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </table>
  )
}

export default ListBlog