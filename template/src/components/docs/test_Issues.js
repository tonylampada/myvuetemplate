import Issues from '../Issues.vue'
import TestUtils from './test_utils.js'

var clock;

describe('Issues.vue', () => {

  beforeEach(function() {
      clock = sinon.useFakeTimers();
  });

  afterEach(function() {
      clock.restore();
  });

  it('listar repositorio e issues', (done) => {
    expect(!!Issues).equal(true);
    const issues = TestUtils.create_component(Issues);
    const tester = IssuesTester(issues);
    tester.enter_username('abcd').then(() => {
        tester.assert_repos(3, {names_contain: ['angularjs', 'vuejs']})
        tester.assert_issues(0);
        return tester.select_repo('vuejs');
    }).then(() => {
        tester.assert_issues(2, {titles_contain: ['Construir a maquina do tempo']})
        done();
    });
  });
});

function IssuesTester(issues){
    return {
        enter_username,
        assert_repos,
        assert_issues,
        select_repo,
    };

    function enter_username(username){
        issues.username = username;
        const promise = issues.findrepos();
        clock.tick(600);
        return promise;
    }

    function assert_repos(repocount, options){
        expect(issues.repos.length).equal(repocount);
        if(options && options.names_contain){
            const names = issues.repos.map(({name}) => { return name; });
            for(var name of options.names_contain){
                expect(names.indexOf(name) >= 0).equal(true);
            }
        }
    }

    function assert_issues(issuecount, options){
        expect(issues.issues.length).equal(issuecount);
        if(options && options.titles_contain){
            const titles = issues.issues.map(({title}) => { return title; });
            for(var title of options.titles_contain){
                expect(titles.indexOf(title) >= 0).equal(true);
            }
        }
    }

    function select_repo(reponame){
        issues.repo = issues.repos.filter(({name}) => { return name == reponame; })[0];
        const promise = issues.findIssues();
        clock.tick(600);
        return promise;
    }
}