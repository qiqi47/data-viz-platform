import { Home, Bell, Package, Building, Settings, LogOut } from 'lucide-react';

export function Sidebar() {
    return (
        <div className="w-20 bg-primary border-r border-border flex flex-col items-center justify-center py-4">
            <div className="flex flex-col items-center space-y-6 flex-1 mt-8">
                <div className=" cursor-pointer rounded-lg w-10 h-10 hover:bg-hover grid place-items-center">
                    <Home className="h-6 w-6 text-secondary" />
                </div>
                <button className="rounded-lg hover:bg-hover transition-colors">
                    <Bell className="h-6 w-6 text-secondary" />
                </button>
                <button className="p-3 rounded-lg hover:bg-hover transition-colors">
                    <Package className="h-6 w-6 text-secondary" />
                </button>
                <button className="p-3 rounded-lg hover:bg-hover transition-colors">
                    <Building className="h-6 w-6 text-secondary" />
                </button>
                <button className="p-3 rounded-lg hover:bg-hover transition-colors">
                    <Settings className="h-6 w-6 text-secondary" />
                </button>
            </div>
            <button className="p-3 rounded-lg hover:bg-hover transition-colors mt-auto">
                <LogOut className="h-6 w-6 text-secondary" />
            </button>
        </div>
    );
}
