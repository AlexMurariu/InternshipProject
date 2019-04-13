import React from "react";

class ProfileModal extends React.Component {
  render() {
    return (
      <div className="modal-style" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.title}</h5>
              <button type="button" className="close" onClick={this.props.onClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{this.props.modalBody}</div>
            <div className="modal-footer">
              <div className="col-sm-4" />
              <button
                type="button"
                className="btn btn-secondary col-sm-4"
                onClick={this.props.onClose}
              >
                Close
              </button>
              <div className="col-sm-4" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileModal;
