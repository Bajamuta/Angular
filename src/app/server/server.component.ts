import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    id: number = 10; //data type not necessary
    status: string = 'offline';

    serverElements = [
        {type: 'server', name: 'Testserver', content: 'just test!'},
        {type: 'server', name: 'Testserver2', content: 'just test2!'}
    ];

    constructor()
    {
        this.status = Math.random() >= 0.5 ? 'online' : 'offline';
    }

    getStatus()
    {
        return this.status;
    }

    getColor()
    {
        return this.status === 'online' ? 'green' : 'red';
    }

    onServerAdded(serverData: {serverName: string, serverContent: string})
    {
        this.serverElements.push({
            type: 'server',
            name: serverData.serverName,
            content: serverData.serverContent
        });
    }
    onBluePrintAdded(serverData: {serverName: string, serverContent: string})
    {
        this.serverElements.push({
            type: 'blueprint',
            name: serverData.serverName,
            content: serverData.serverContent
        });   
    }
}