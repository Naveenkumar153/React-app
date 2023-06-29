import './ExpenseItem.css'

export default function ExpenseItem(){
    return (
        <div className="expenseItem-component expense-item">
            <div>Jun 29th 2023</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">
                    $297.67
                </div>
            </div>
        </div>
    );
}
