import React from 'react'
import { Link } from 'react-router-dom'

import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({
  id, description, amount, createdAt, dispatch
}) => (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <p>
        {numeral(amount/100).format('$0,0.00')}
      </p>
      <p>
        {moment(createdAt).format("MM/DD/YYYY")}
      </p>
    </div>
)

export default ExpenseListItem
