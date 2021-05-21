import React from 'react';
import { Card } from 'react-bootstrap';

const Data = ({ data, updateStatus }) => {
	const { notification } = data;
	const isNew = notification === 'new';
	const isActionRequired = notification === 'action-required';

	return (
		<Card className="my-3 p-3">
			<Card.Header className={data.notification}>
				<div className="card-title">
					<div className="d-flex justify-content-between">
						<div className="d-flex flex-column ">
							<span className="mb-1">{data.title}</span>
						</div>

						<span>{data.timestamp}</span>
					</div>
					<div className="card-title">
						<div className="d-flex justify-content-between">
							<div className="d-flex flex-column ">
								<span className="mb-1">Device_IP{data.device}</span>
							</div>

							<span>{data.notification}</span>
						</div>
					</div>
				</div>

				<div className="state-color">{data.state} </div>
			</Card.Header>
			<Card.Body>
				{data.title}

				<Card.Img src={data.image} />
			</Card.Body>
			{
				<Card.Footer className="text-muted">
					{isNew || isActionRequired ? (
						<i className="fas fa-times" onClick={() => updateStatus('rejected', data._id)}>
							Rejects
						</i>
					) : null}
					{isNew ? (
						<i className="fas fa-angle-double-right" onClick={() => updateStatus('action-required', data._id)}>
							{' '}
							Action Required
						</i>
					) : null}
					{isActionRequired ? (
						<i className="fas fa-angle-down" onClick={() => updateStatus('closed', data._id)}>
							Close
						</i>
					) : null}
				</Card.Footer>
			}
		</Card>
	);
};

export default Data;

// Notifications can be progressed forward through the following states.

// New – Can be rejected or Action required
// Rejected – Can’t be changed
// Closed – Can’t be changed.
// Action Required – Can be rejected or closed

// if(notifcation.new ? rejected : action-required){
// } else {
//  if (notification.action.required ? rejected : closed) {
// } else {
// if (notification.rejected ? rejected : closed)
// }

// <Button type="submit" <i className="fas fa-times"> Reject</i> >
//</Button>

// <Button type="submit" <i className="fas fa-angle-double-right"> Action Required</i> >
//</Button>

// <Button type="submit" <i className="fas ffa-angle-down"> Close</i> >
//</Button>
