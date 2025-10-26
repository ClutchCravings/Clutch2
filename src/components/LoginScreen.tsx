import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Twitch } from 'lucide-react';

const LoginScreen: React.FC = () => {
  const { login } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-white/20">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-purple-600 rounded-full">
              <Twitch className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-white">
            Twitch Multi-Stream Viewer
          </CardTitle>
          <CardDescription className="text-purple-200">
            Watch up to 6 streams simultaneously with integrated chat
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={login}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors"
            size="lg"
          >
            <Twitch className="mr-2 h-5 w-5" />
            Connect with Twitch
          </Button>
          <p className="text-xs text-purple-300 text-center">
            Demo mode - Click to simulate Twitch authentication
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginScreen;