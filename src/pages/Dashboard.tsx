import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-primary text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Issue Desk Dashboard</h1>
          <Button onClick={signOut} variant="secondary">
            Logout
          </Button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-8">
        <div className="bg-card rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Welcome to Your Dashboard
          </h2>
          <p className="text-lg text-foreground mb-6">
            Email: {user.email}
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <button
              onClick={() => navigate('/submit-complaint')}
              className="bg-primary/10 hover:bg-primary/20 rounded-lg p-6 text-left transition-colors"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">Submit Complaint</h3>
              <p className="text-muted-foreground">Report a new issue or complaint</p>
            </button>
            <div className="bg-primary/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">My Complaints</h3>
              <p className="text-muted-foreground">View your submitted complaints</p>
            </div>
            <div className="bg-primary/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">Profile</h3>
              <p className="text-muted-foreground">Manage your account settings</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
