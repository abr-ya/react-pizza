import React from 'react';
import styles from './bsModal.module.scss';

interface IBsModal {
	id: string;
    children: any;
    title?: string;
}

const BsModal = ({id, children, title}: IBsModal) => (
	<div className={`modal fade ${styles.bsModal}`} id={id}>
		<div className="modal-dialog modal-dialog-centered">
			<div className="modal-content">			
				<div className="modal-header">
					{title && <h3 className="modal-title">{title}</h3>}
					<button type="button" className="close" data-dismiss="modal">&times;</button>
				</div>

				<div className="modal-body">
					{children}
				</div>

				<div className="modal-footer">
					<button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
);

export default BsModal;
