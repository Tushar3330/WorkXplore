export const userColomns = [{field: "_id", headerName: "ID", width: 70},
    {field: "user", headerName: "Student", width: 230, renderCell: (params)=>{
        return(
            <div className="flex items-center gap-1">
                <img src= {params.row.profile?.profilePhoto} alt="avatar" className="image w-[30px] h-[30px] rounded-full"/>
                {params.row.fullname}
            </div>
        )
    }},
    {field: "email", headerName: "Email", width: 230},
    {field: "role", headerName: "Role", width: 100, renderCell: (params)=>{
        const statusColor = (role) => {
            switch (role) {
              case "student":
                return "bg-green-100 text-green-800";
              case "recruiter":
                return "bg-yellow-100 text-yellow-800";
              case "admin":
                return "bg-red-100 text-red-800";
              default:
                return "bg-zin-300 text-zinc-600";
            }
          }
        return(
            <div className={`rounded flex w-[70%] h-10 mt-2 justify-center items-center ${statusColor(params.row.role)}`}>
              {params.row.role}
            </div>
        )
    }},
]


export const recruiterColomns = [{field: "_id", headerName: "ID", width: 70},
  {field: "user", headerName: "Recruiter", width: 230, renderCell: (params)=>{
      return(
          <div className="flex items-center gap-1">
              <img src={params.row.profile?.profilePhoto} alt="avatar" className="image w-[30px] h-[30px] rounded-full"/>
              {params.row.fullname}
          </div>
      )
  }},
  {field: "email", headerName: "Email", width: 230},
  {field: "role", headerName: "Role", width: 100, renderCell: (params)=>{
      const statusColor = (role) => {
          switch (role) {
            case "student":
              return "bg-green-100 text-green-800";
            case "recruiter":
              return "bg-yellow-100 text-yellow-800";
            case "admin":
              return "bg-red-100 text-red-800";
            default:
              return "bg-zin-300 text-zinc-600";
          }
        }
      return(
          <div className={`rounded flex p-[5px] w-[75%] h-10 mt-2 justify-center items-center ${statusColor(params.row.role)}`}>
            {params.row.role}
          </div>
      )
  }},
]

