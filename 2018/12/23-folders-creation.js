// Create folder structure based on configuration

/*

var structure = "folderA
folderB
    folberB1
    folderB2
        ..
folderC";

*/

var folders =
{
    "parent": {
        "Season 1. 3": {
            "subfolder1": {
                "subfolder1": {
                    "subfolder1": null,
                    "subfolder2": null
                },
                "subfolder2": {
                    "subfolder1": null,
                    "subfolder2": null
                },
            },
            "subfolder2": {
                "subfolder1": null,
                "subfolder2": {
                    "subfolder1": null,
                    "subfolder2": {
                        "subfolder1": null,
                        "subfolder2": null
                    },
                },
            },
        },
        "folder2": null
    }
};

const fs = require('fs-extra');

createSubfolders('.', folders);

function createSubfolders(parentFolderPath, children) {
    for (var folder in children) {
        var currentPath = parentFolderPath + '/' + folder;
        if (children[folder] != null) {
            createSubfolders(currentPath, children[folder]);
        }
        else {
            console.log(`Creating ${currentPath}`)
            fs.ensureDirSync(currentPath);
        }
    }
}





// fs.ensureDirSync('./folder1/subfolder1');
// fs.ensureDirSync('./folder1/subfolder2');
// fs.ensureDirSync('./folder2');
