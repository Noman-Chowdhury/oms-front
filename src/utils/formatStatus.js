export const formatStatus = (status) => {
    switch (status) {
        case 'pending':
            return '<span class="badge bg-warning">' + status.toString().toUpperCase() + '</span>';
        case 'approved':
        case 'active':
            return '<span class="badge bg-success">' + status.toString().toUpperCase() + '</span>';
        case 'rejected':
            return '<span class="badge bg-warning">Pending</span>';
        case 'Unpaid':
            return '<span class="badge bg-danger">Unpaid</span>';
        case 'Canceled':
            return '<span class="badge bg-danger">Canceled</span>';
        default:
            return '<span class="badge bg-secondary">Unknown</span>';
    }
};
