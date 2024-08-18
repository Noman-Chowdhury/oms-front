export const formatStatus = (status) => {
    switch (status) {
        case 'pending':
        case 'In Review':
            return '<span class="badge bg-warning">' + status.toString().toUpperCase() + '</span>';
        case 'approved':
        case 'active':
            return '<span class="badge bg-success">' + status.toString().toUpperCase() + '</span>';
        case 'inactive':
        case 'rejected':
            return '<span class="badge bg-danger">' + status.toString().toUpperCase() + '</span>';
        case 'Unpaid':
            return '<span class="badge bg-danger">Unpaid</span>';
        case 'Canceled':
            return '<span class="badge bg-danger">Canceled</span>';
        case 'In Time':
            return '<span class="text-success"> ' + status.toString().toUpperCase() + '</span>';
        default:
            return '<span class="badge bg-secondary">Unknown</span>';
    }
};
